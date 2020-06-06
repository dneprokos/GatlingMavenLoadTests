import io.gatling.app.Gatling
import io.gatling.core.config.GatlingPropertiesBuilder
import simulations._

object GatlingTestRunner {
  def main(args: Array[String]): Unit = {

    // this is where you specify the class you want to run
    val simClass = classOf[BasicLoadSimulation].getName

    val props = new GatlingPropertiesBuilder
    props.simulationClass(simClass)

    Gatling.fromMap(props.build)
  }
}
