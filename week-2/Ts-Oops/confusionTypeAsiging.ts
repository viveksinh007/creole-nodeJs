console.log(typeof NaN);

type id = number;
type name = string;
type age = number;

interface student {
  id: id;
  name: name;
  age: age;
}

const PId: id = 1;
const PName: name = "xyz";
const PAge: age = 10;

let Student: student = {
  id: PId,
  name: PName,
  age: PAge,
};

console.log(Student);
