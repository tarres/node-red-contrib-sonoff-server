module.exports = function (RED) {
    function SonoffOn(config) {
        const node = this;
        RED.nodes.createNode(node, config);
        
        node.server = RED.nodes.getNode(config.server);
        const sonoffServer = node.server.sonoffServer;

        node.on('input', function (msg) {
            var deviceID = msg.toString();
            msg.topic = deviceID;
            msg.payload = sonoffServer.turnOnDevice(deviceID);
            node.send(msg);
        });
    }
    RED.nodes.registerType("sonoff-on", SonoffOn);
}