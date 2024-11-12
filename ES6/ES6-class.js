//ES6'dan önce prototype tabanlı nesne oluşturma:

// function Employee(name,age,salary){
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }

// Employee.prototype.showInfos = function(){
//     console.log("isim : " + this.name + " yaş : " + this.age + " maaş : " + this.salary);
// }

// const emp = new Employee("ali",25,1000);
// console.log(emp); //Employee {name: 'ali', age: 25, salary: 1000}

//Syntactic Sugar bir programlama dilindeki bir özelliğin, aynı işlevi görebilen ama daha kısa, daha temiz ve daha anlaşılır bir sözdizimi (syntax) ile yazılmasıdır.

//ES6 ile Class (Sınıf) Yapısı
//ES6 ile JavaScript'te class yapısı tanıtıldı. 
//Bu, daha önceki function tabanlı prototipler yerine, daha anlaşılır ve düzenli bir yapıyı kullanarak nesne oluşturmamıza olanak tanır.

class Employee{
    
    constructor(name,age,salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    showInfos(){
        console.log("isim : " + this.name + " yaş : " + this.age + " maaş : " + this.salary);
    }
}

const emp = new Employee("ayşe",22,2000);
console.log(emp); //Employee {name: 'ayşe', age: 22, salary: 2000}

emp.showInfos();// isim : ayşe yaş : 22 maaş : 2000