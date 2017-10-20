function random(min = 0, max = 1) {
    return Math.random() * (max - min) + min;
}

function range(size = 0) {
    return Array.from(Array(size).keys());
}

function max(array, lambda) {
    let maxId = -1;
    const valueArray = array.map(lambda);
    valueArray.forEach((value, id) =>
        maxId = valueArray[maxId] < value ? id : maxId);

    return { id: maxId, value: array[maxId] };
}

function probabilityPick(array) {
    const arraySum = array.reduce((left, right) => left + right, 0);
    const randomPosition = random(0, arraySum);
    let probAccumulation = 0;

    const result = array.map((value, id) => ({ value, id })).find(({ value }) => {
        probAccumulation += value;
        return probAccumulation >= randomPosition;
    });

    return result.id || -1;
}


class GeneticModel {
    constructor({
        murtationRate = 0.1,
        populationSize = 50,
        target = ''
    } = {}) {
        this.murationRate = murtationRate;
        this.populationSize = populationSize;
        this.target = target;
        this.population = [];
        this.mostFit = {};
    }

    init() {
        this.population = this.randomPopulation(
            this.populationSize, this.target.length);
        this.mostFit = this.calculateMostFit(this.population, this.target);

        return this;
    }

    tick() {
        this.population = this.evolvePopulation(
            this.population,
            this.populationSize,
            this.target
        );
        this.mostFit = this.calculateMostFit(this.population, this.target);

        return this;
    }


    calculateMostFit(population, target) {
        const { id, value: fitnessValue } = max(population,
            dna => this.fitness(dna, target));

        return { value: population[id], fitness: fitnessValue };
    }

    randomPopulation(size, dnaSize) {
        return range(size).map(() => this.randomDna(dnaSize));
    }

    evolvePopulation(population, newPopulationSize, target) {
        let populationFitness = population.map(dna => this.fitness(dna, target));
        return range(newPopulationSize).map(() => {
            const leftParentId = probabilityPick(populationFitness);
            const rightParentId = probabilityPick(populationFitness);

            return this.mutate(this.crossover(
                population[leftParentId],
                population[rightParentId]
            ));
        });
    }

    fitness(dna, target) {
        return dna.split('').filter((letter, id) => letter === target[id]).length;
    }

    randomGenome() {
        return String.fromCharCode(97 + random(0, 26));
    }

    randomDna(size) {
        return range(size).map(() => this.randomGenome()).join('');
    }

    crossover(leftParent, rightParent) {
        const cutPoint = Math.floor(random(0, leftParent.length));
        return leftParent.slice(0, cutPoint)
            .concat(rightParent.slice(cutPoint, rightParent.length));
    }

    mutate(dna, murationRate) {
        return dna.split('').map(letter =>
            murationRate < random(0, 1) ?
                this.randomGenome() : letter).join('');
    }
}

const target = 'hello world';
const model = new GeneticModel({
    murationRate: 0.01,
    populationSize: 100,
    target
}).init();

let interval = setInterval(() => {
    console.log(`most fit: ${ model.mostFit.value }, ${ model.mostFit.fitness }`);

    model.tick();
    if (model.mostFit === target) {
        clearInterval(interval);
        console.log('done');
    }
}, 500);
