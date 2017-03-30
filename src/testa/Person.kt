package testa

/**
 * Created by peixuan on 2017/3/30.
 */
open class Person(var name: String, var sex: Int, var age: Int) {
    override fun toString(): String {
        return "name=$name, sex=$sex, age=$age"
    }
}