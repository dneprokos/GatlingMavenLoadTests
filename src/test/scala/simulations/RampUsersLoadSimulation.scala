package simulations

import baseConfig.BaseSimulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration.DurationInt

class RampUsersLoadSimulation extends BaseSimulation {
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
      nothingFor(5 seconds),
      rampUsersPerSec(1) to (5) during(20 seconds)
    ).protocols(httpConf.inferHtmlResources()))
}
