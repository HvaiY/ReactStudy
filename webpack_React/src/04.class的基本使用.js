
//Person
function Person(name,age){
    this.name=name
    this.age=age
}
Person.info='aaa' //静态属性

Person.prototype.say=function(){
    console.log('这是实例方法')
}

Person.show=function(){
    console.log('这是静态方法')
}
const p=new Person('周周','28')

console.log(p)
p.say()
Person.show();

console.log('------------------------------class-------------------------------------------------')

//这是一个类  其实与上面没什么区别，可以看着class 是一个语法糖
    //注意在calss中，只能有静态属性，静态方法，实例方法 ，构造器
class Animal {

    //类中的构造器 ，默认是有一个空的构造器,new一个对象的时候优先执行构造器
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    //静态属性
    static info = 'aaa'
    say(){
        console.log('animal，这是一个实例方法')
    }
    static show(){
        console.log('这是一个静态方法')
    }
}
const animal = new Animal('大黄', 3)
animal.say()
Animal.show()
console.log(animal)
console.log(Animal.info)