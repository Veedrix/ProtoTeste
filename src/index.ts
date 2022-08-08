import Client from "./client/Client";

var client: Client = new Client();
for (var i = 1; i <= 4; i++) {
  console.log(client.createOne("s" + i).toString());
}