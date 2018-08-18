//父类
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    show(){
        console.log('都是人类 都说嗨！')
    }
}
//子类
class American extends Person{
    //子类写构造函数
    constructor(name,age){
        super(name,age) //super父类构造器的引用。其实优先调用父类的构造函数
    }
}

//子类二
class Chinese extends Person{}

const a=new American('jack',22)
a.show()
console.log(a)

const c=new Chinese('张三',23)
a.show()
console.log(c)