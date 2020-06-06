# GatlingMavenLoadTests

#Preconditions

<h3>Test site:</h3>

1. Please clone the following git project: https://github.com/dneprokos/VideoGameDB
2. Go to the project directory and run this project with "mvn spring-boot:run" command
3. Please open "http://localhost:8080/swagger-ui/index.html#/" page to make sure a test site is running

<h3>Test project</h3>

1. Clone current project
2. Import project POM.xml file in any IDEA

#Test Running

<h3>Run the test with Engine</h3>
 
1. Right mouse click on "..\src\test\scala\Engine object" --> "Run Engine" class
2. Please choice(In the console window) an index of the test class you want to run (As an example 1) and test run name(optional. You can press ENTER).
3. Result output will print stored report path.

<h3>Run the test with TestRunner</h3>

1. Right mouse click on "..\src\test\scala\GatlingTestRunner object" --> "Run GatlingTestRunner" class


<h3>Run from command line</h3>  
1) Open command line and navigate project folder.

2a) Default parameters: 
Run "mvn gatling:test -Dgatling.simulationClass=simulations.RuntimeParameters"

2b) Set parameters:
Run "mvn gatling:test -Dgatling.simulationClass=simulations.RuntimeParameters -DUSERS=10 -DRAMP_DURATION=5 -DDURATION=30"


Note: Please change class name to the class test you want to run. 
