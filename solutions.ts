// ______ 1: filterEvenNumbers ______________________________

const filterEvenNumbers = (num: number[]): number[] => {
  return num.filter((val) => val % 2 === 0);
};


// ______ 2: reverseString  ______________________________

const reverseString = (val: string): string => {
  return val.split("").reverse().join("");
};


// ______ 3: StringOrNumber   ______________________________

type StringOrNumber = string | number;

const checkType = (val: StringOrNumber): "String" | "Number" => {
  if (typeof val === "string") return "String";
  return "Number";
};


// ______ 4: getProperty    ______________________________

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};



// ______ 5: ______________________________

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}


interface BookReadStatus extends Book {
  isRead: boolean;
}

const toggleReadStatus = (book: Book): BookReadStatus => {
  return { ...book, isRead: true };
};


// ______ 6: Person     ______________________________

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}



// ______ 7: getIntersection     ______________________________

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
    const set = new Set(arr2);
    return arr1.filter( (val) => set.has(val));
}
