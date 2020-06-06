package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import baseConfig.BaseSimulation

class CsvFeederLoadTest extends BaseSimulation{
  //Circular file read strategy was used. Gatling offers 4 different strategies:

  //.queue - default behavior: use an Iterator on the underlying sequence
  //.random - randomly pick an entry in the sequence
  //.shuffle - shuffle entries, then behave like queue
  //.circular - go back to the top of the sequence once the end is reached
  val csvFeeder = csv("data/gameCsvFile.csv").circular

  def getSpecificVideoGame() = {
    repeat(10) {
      feed(csvFeeder)
        .exec(http("Get specific video game")
          .get("videogames/${gameId}") //For each call, we substitute in a different gameId taken from the CSV file.
          .check(jsonPath("$.name").is("${gameName}")) //We check game name matches the one we expect, again taking the gameName from the CSV file
          .check(status.is(200)))
        .pause(1)
    }
  }

  val scn = scenario("Csv Feeder test")
    .exec(getSpecificVideoGame())

  setUp(
    scn.inject(atOnceUsers(1))
  ).protocols(httpConf)
}
