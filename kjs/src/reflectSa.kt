/**
 * Created by peixuan on 2017/3/30.
 */

class A
class B
class C

inline fun <reified T> foo() {
    println(T::class.simpleName)
}

fun main(args: Array<String>) {
    val a = A()
    println(a::class.simpleName)
    println(B::class.simpleName)
    println(C::class.simpleName)
    println(B::class.js.name)
    foo<C>()
}