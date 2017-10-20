function random(min = 0, max = 1) {
    return Math.random() * (max - min) + min;
}

function randomArray(array) {
    return array[Math.floor(random(0, array.length))]
}

function range(size = 0) {
    return Array.from(Array(size).keys());
}

function maxId(array, lambda) {
    let maxId = -1;
    const valueArray = array.map(lambda);
    valueArray.forEach((value, id) =>
        maxId = valueArray[maxId] < value ? id : maxId);

    return maxId;
}


class GeneticModel {
    constructor({
        murtationRate = 0.1,
        populationSize = 50
    } = {}) {
        this.murationRate = murtationRate;
        this.populationSize = populationSize;
        this.population = [];
        this.mostFit = {};
    }

    init() {
        this.population = this.randomPopulation(this.populationSize);
        this.mostFit = this.calculateMostFit(this.population);
        return this;
    }

    tick() {
        this.population = this.evolvePopulation(
            this.population,
            this.populationSize
        );
        this.mostFit = this.calculateMostFit(this.population);

        return this;
    }


    calculateMostFit(population) {
        const mostFitId = maxId(population, dna => this.fitness(dna));
        return population[mostFitId];
    }

    randomPopulation(size) {
        return range(size).map(() => this.randomDna());
    }

    probabilityPick(array) {
        const arraySum = array.reduce((left, right) => left + right, 0);
        const randomPosition = random(0, arraySum);
        let probAccumulation = 0;

        return arraySum.map((value, id) => ({ value, id })).find(value => {
            probAccumulation += value;
            return probAccumulation >= randomPosition;
        }).id || [];
    }

    evolvePopulation(population, newPopulationSize) {
        let populationFitness = population.map(dna => this.fitness(dna));
        return range(newPopulationSize).map(() => {
            const leftParentId = this.probabilityPick(populationFitness);
            const rightParentId = this.probabilityPick(populationFitness);

            return this.mutate(this.crossover(
                population[leftParentId],
                population[rightParentId]
            ));
        });
    }

    fitness(dna, target) {
        return dna.filter((letter, id) => letter === target[id]).length;
    }

    randomGenome() {
        return String.fromCharCode(65 + random(0, 26));
    }

    randomDna(size) {
        return range(size).map(() => this.randomGenome()).join('');
    }

    crossover(leftParent, rightParent) {
        const cutPoint = Math.floor(0, leftParent.length);
        return leftParent.slice(0, cutPoint)
            .concat(rightParent.slice(cutPoint, rightParent.length));
    }

    mutate(dna, murationRate) {
        return dna.split('').map(letter =>
            murationRate < random(0, 1) ?
                this.randomGenome() : letter);
    }
}
