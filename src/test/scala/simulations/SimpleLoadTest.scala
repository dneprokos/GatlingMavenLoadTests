package simulations

import baseConfig.BaseSimulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class SimpleLoadTest extends BaseSimulation {

  // 1 HTTP Protocol step builder was moved to base class

  // 2 Scenario Definition
  val scn = scenario("Simple Test")
    .exec(http("Get All Games")
      .get("videogames"))

  // 3 Load Scenario
  setUp(
    scn.inject(atOnceUsers(1))
  ).protocols(httpConf)
}
