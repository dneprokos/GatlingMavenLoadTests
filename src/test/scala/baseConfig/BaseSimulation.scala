package baseConfig

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class BaseSimulation extends Simulation{
  // 1 Http Conf
  val httpConf = http.baseUrl("http://localhost:8080/app/")
    .header("Accept", "application/json")
    //.proxy(Proxy("localhost", 8888))
}
