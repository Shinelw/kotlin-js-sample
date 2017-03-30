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



}
fun Int.hello() {
    println(this)
}

fun isTypeOf(message: String) {
    js("console.log(message)")
}


