install:
	@npm install
	npm install dalek-cli -g

run-test:
	chromedriver &
	dalek test/google_test.js -b chrome

selenium-server:
	java -jar node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-*.jar &

kill-server:
	kill $(ps aux | grep '[s]elenium-server-standalone' | awk '{print $2}')


