const compose = f => g => x => f(g(x));

const just = value => [value];
const nothing = [];
const fromJust = ([value]) => value;

const head = gen => {
    const {
        done,
        value
    } = gen().next();

    return done ? nothing : just(value);
};

const tail = gen => function* (){
    const g = gen();
    g.next();
    yield* g;
};

const cons = el => gen => function* () {
    yield el;
    yield* gen();
};

const empty = function* () {};

const list = (...elements) => function* () {
    yield* elements;
};

const isEmpty = gen => head(gen) === nothing;

const concat = genA => genB => isEmpty(genA) ?
    genB :
    cons(fromJust(head(genA)))
        (concat(tail(genA))
               (genB));

const interleaveConcat = genA => genB => isEmpty(genA) ?
    genB :
    cons(fromJust(head(genA)))
        (interleaveConcat(genB)
                         (tail(genA)));

const interleaveMany = func => gen => isEmpty(gen) ?
    empty :
    interleaveConcat(func(fromJust(head(gen))))
                    (interleaveMany(func)
                                   (tail(gen)));

const cartesian = genA => genB =>
    interleaveMany(elA => interleaveMany(elB => list([elA, elB]))(genB))
                  (genA);

const fromGen = gen => Array.from(gen());

const take = n => gen => n == 0 || isEmpty(gen) ? 
    empty :
    cons(fromJust(head(gen)))
        (take(n - 1)(tail(gen)));

const range = start => end => function *() {
    for (let i = start; i<= end;i++) {
        yield i;
    }
};

const map = mapper => gen => isEmpty(gen) ?
    empty :
    cons(mapper(fromJust(head(gen))))
        (map(mapper)(tail(gen)))


function main() {
    console.log('Hello, World!');

    const naturals = range(1)(Infinity)
    const naturalPairs = cartesian(naturals)
                                  (tail(naturals));
    const rationals = map(([top, bottom]) => top / bottom)
                         (naturalPairs);

    const firstRationals = fromGen(take(1000)(rationals));

    console.log(firstRationals);
}

main();
