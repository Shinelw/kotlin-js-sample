package testb

import testa.Man

/**
 * Created by shinelw on 2017/3/30.
 */
fun main(args: Array<String>) {
    var message: dynamic = "Hello JavaScript"
    var list = arrayListOf(1, 2, 3, 4, 5)
    var longnum: Int
    var man = Man("hahah")
    println(man.toString())
    var dny: dynamic = 2
    println(dny)
    jsTypeOf("Kotlin form JavaScript")
    f()
    alert("external test")

}
fun Int.hello() {
    println(this)
}

fun isTypeOf(message: String) {
    js("console.log(message)")
}

fun hello() {
    println("hellow")
}
fun f() {
    val x: Int = 23
    val y: Any = x
    println(y as Float)
    val Kotlin = 1
    println(Kotlin)
}

external fun alert(message: Any?): Unit

