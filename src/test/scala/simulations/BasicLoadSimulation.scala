package simulations

import baseConfig.BaseSimulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration.DurationInt

class BasicLoadSimulation extends BaseSimulation {
  def getAllVideoGames() = {
    exec(
      http("Get All Video Games")
        .get("videogames")
        .check(status.is(200))
    )
  }

  def getSpecificVideoGame() = {
    exec(
      http("Get Specific Video Game")
        .get("videogames/2")
        .check(status.is(200))
    )
  }

  val scn = scenario("Get Video Games")
    .exec(getAllVideoGames())
    .pause(5)
    .exec(getSpecificVideoGame())
    .pause(5)
    .exec(getAllVideoGames())

  setUp(
    scn.inject(
      nothingFor(5 seconds), // do nothing for 5 seconds
      atOnceUsers(5), // inject 5 users at once
      rampUsers(10) during(5 seconds) // inject 10 users over a period of 5 seconds
    ).protocols(httpConf.inferHtmlResources()))
}
