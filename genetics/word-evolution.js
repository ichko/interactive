function random(min = 0, max = 1) {
    return Math.random() * (max - min) + min;
}

function randomFromArray(array) {
    return array[Math.floor(random(0, array.length))];
}

function range(size = 0) {
    return Array.from(Array(size).keys());
}

function max(array, lambda) {
    let maxId = 0;
    const valueArray = array.map(lambda);
    valueArray.forEach((value, id) =>
        maxId = valueArray[maxId] < value ? id : maxId);

    return { id: maxId, value: valueArray[maxId] };
}

function probabilityPick(array) {
    const arraySum = array.reduce((left, right) => left + right, 0);
    const randomPosition = random(0, arraySum) - 1;
    let probAccumulation = 0;

    const result = array.map((value, id) => ({ value, id })).find(({ value }) => {
        probAccumulation += value;
        return probAccumulation >= randomPosition;
    }) || { id: -1 };

    return result.id;
}


class GeneticModel {
    constructor({
        mutationRate = 0.1,
        populationSize = 50,
        target = ''
    } = {}) {
        this.mutationRate = mutationRate;
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
            this.target,
            this.mutationRate
        );
        this.mostFit = this.calculateMostFit(this.population, this.target);

        return this;
    }


    calculateMostFit(population, target) {
        const { id, value: fitnessValue } = max(population,
            dna => this.fitness(dna, target));

        return {
            value: population[id],
            fitness: fitnessValue
        };
    }

    randomPopulation(size, dnaSize) {
        return range(size).map(() => this.randomDna(dnaSize));
    }

    evolvePopulation(population, newPopulationSize, target, mutationRate) {
        let populationFitness = population.map(dna => this.fitness(dna, target));
        return range(newPopulationSize).map(() => {
            const leftParentId = probabilityPick(populationFitness);
            const rightParentId = probabilityPick(populationFitness);

            return this.mutate(this.crossover(
                population[leftParentId],
                population[rightParentId]
            ), mutationRate);
        });
    }

    fitness(dna, target) {
        return dna.split('').filter((letter, id) => letter === target[id]).length;
    }

    randomGenome() {
        return randomFromArray('abcdefghijklmnopqrstuvwxyz ');
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
            random(0, 1) < murationRate ?
                this.randomGenome() : letter).join('');
    }
}

const target = 'hello world';
const model = new GeneticModel({
    mutationRate: 0.01,
    populationSize: 100,
    target
}).init();

let generation = 0;
let interval = setInterval(() => {
    console.log(`most fit: ${ model.mostFit.value }, ${ model.mostFit.fitness }, gen: ${ generation++ }`);

    model.tick();
    if (model.mostFit.value === target) {
        clearInterval(interval);
        console.log('done');
    }
}, 50);
