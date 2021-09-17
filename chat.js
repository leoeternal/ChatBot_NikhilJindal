var messageReceived;
const m = moment();

var data = [
    { message: "Hi user ", sender: "agent", createdAt: "2021-09-14T13:23:02.298Z" },
    { message: "How are you doing today you ?", sender: "user", createdAt: "2021-09-14T13:23:02.298Z" },
    { message: "I am good, how about you", sender: "agent", createdAt: "2021-09-14T13:23:02.298Z" },
    { message: "I am good, thanks for asking", sender: "user", createdAt: "2021-09-14T13:23:02.298Z" },
    { message: "How can I help you today ?", sender: "agent", createdAt: "2021-09-14T13:23:02.298Z" },
];

function getDataFromServer() {
    return data;
}

$("textarea").keypress((event) => {
    if (event.keyCode === 13) {
        messageReceived = $("textarea").val();
        if (messageReceived != "") {
            var year = m.year();
            var month = m.month() + 1;
            var dateOfMonth = m.date();
            var date = year.toString() + "-" + month.toString() + "-" + dateOfMonth.toString();

            var hour = m.hour();
            var min = m.minute();
            var time = hour.toString() + ":" + min.toString() + ":00";

            var createdAtUser = m.toString();

            $("textarea").val("");
            var userObj = { "message": messageReceived, "sender": "user", "createdAt": createdAtUser };
            data.push(userObj);
            $("ul").append(
                "<div class='userMessage'><div class='showMessageUserAndTime'><div class='userMessageContainer'><p>" + messageReceived + "</p></div><div class='userTime'><p>" + moment(date + " " + time).fromNow() + "</p></div></div><div class='logoUser'></div></div><br>"
            );
        }
        event.preventDefault();
    }
})

$("button[type='button']").click(() => {
    messageReceived = $("textarea").val();
    if (messageReceived != "") {
        var year = m.year();
        var month = m.month() + 1;
        var dateOfMonth = m.date();
        var date = year.toString() + "-" + month.toString() + "-" + dateOfMonth.toString();

        var hour = m.hour();
        var min = m.minute();
        var time = hour.toString() + ":" + min.toString() + ":00";

        var createdAtUser=m.toString();

        $("textarea").val("");
        var userObj = { "message": messageReceived, "sender": "user", "createdAt":createdAtUser };
        data.push(userObj);
        $("ul").append(
            "<div class='userMessage'><div class='showMessageUserAndTime'><div class='userMessageContainer'><p>" + messageReceived + "</p></div><div class='userTime'><p>"+moment(date + " " + time).fromNow()+"</p></div></div><div class='logoUser'></div></div><br>"
        );
    }
})


$("button[type='submit']").click(() => {
    messageReceived = $("textarea").val();
    if (messageReceived != "") {
        var year = m.year();
        var month = m.month() + 1;
        var dateOfMonth = m.date();
        var date = year.toString() + "-" + month.toString() + "-" + dateOfMonth.toString();

        var hour = m.hour();
        var min = m.minute();
        var time = hour.toString() + ":" + min.toString() + ":00";

        var createdAtAgent = m.toString();

        $("textarea").val("");
        var agentObj = { "message": messageReceived, "sender": "agent", "createdAt": createdAtAgent };
        data.push(agentObj);
        $("ul").append(
            "<div class='agentMessage'><div class='logoAgent'></div><div class='showMessageAgentAndTime'><div class='agentMessageContainer'><p>" + messageReceived + "</p></div><div class='agentTime'><p>" + moment(date + " " + time).fromNow() + "</p></div></div></div><br>"
        );
    }
})


class Chat {
    constructor() {
        var data = getDataFromServer();
        for (var i = 0; i < data.length; i++) {
            if (data[i].sender == "user") {
                var mssg = data[i].message;
                var date = data[i].createdAt.substring(0, 10);
                var time = data[i].createdAt.substring(11, 19);
                $("ul").append(
                    "<div class='userMessage'><div class='showMessageUserAndTime'><div class='userMessageContainer'><p>" + mssg + "</p></div><div class='userTime'><p>" + moment(date + " " + time).fromNow() + "</p></div></div><div class='logoUser'></div></div><br>"
                );
            }
            else {
                var mssg2 = data[i].message;
                date = data[i].createdAt.substring(0, 10);
                time = data[i].createdAt.substring(11, 19);
                $("ul").append(
                    "<div class='agentMessage'><div class='logoAgent'></div><div class='showMessageAgentAndTime'><div class='agentMessageContainer'><p>" + mssg2 + "</p></div><div class='agentTime'><p>" + moment(date + " " + time).fromNow() + "</p></div></div></div><br>"
                );
            }
        }
    }
}

ch = new Chat();