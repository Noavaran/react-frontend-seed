import React from 'react';
import io from 'socket.io-client';

export default class SocketWatcher extends React.Component{

  componentDidMount() {
      const clientKey = "clientId1";
      const clientToken = "token1";
      let socket = io("http://localhost:3000");

      socket.on("error_permission", function(data) {
          console.log("receive permission error in client", data);
          this.showError(data);
      });

      socket.on("disconnect", function(data) {
          console.log("disconnected", data);
      });

      socket.on("reconnect_attempt", () => {
          console.log("reconnectiong ...");
      });

      socket.emit("join", { clientKey, clientToken });

      socket.on("join_success", permissions => {
          console.log("connect and get permissions ...", permissions);
          socket.emit("online_visitor", {
              credentials: {
                  clientKey: "clientId1",
                  projectKey: "website"
              },
              data: {
                  when: new Date()
              }
          });
      });

      socket.on("online_visitor_log", data => {
          console.log('online_visitor_log', data);
      });

      socket.on("online_visitor_user", data => {
          console.log('online_visitor_user', data);
      });

      socket.on("online_visitor_count", data => {
          console.log('online_visitor_count', data);
      });
  }

  showError = data => {
      console.log('showError data', data);
  };


  render() {
    return null
  }
}