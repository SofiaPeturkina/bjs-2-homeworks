// Задача 1
class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error("Параметр id не задан");
        }

        if (this.alarmCollection.find((alarm) => alarm.id === id)) {
            console.error("Такой звонок уже существует");
            return;
        }
        
        let clock = {
            time,
            callback,
            id,
        }
        this.alarmCollection.push(clock);
    }

    removeClock(id) {
        const index = this.alarmCollection.findIndex((alarm) => alarm.id === id);
        return !!this.alarmCollection.splice(index, 1);
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });
    }

    start() {
        const checkClock = (clock) => {
            if (this.getCurrentFormattedTime() === clock.time) {
                return clock.callback();
            }
        }
        if (this.timerId === null) {
            const func = () => this.alarmCollection.forEach((clock) => checkClock(clock));
            return this.timerId = setInterval(func);
        }
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach((item, idx) => {
            console.log(item);
        });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    const phoneAlarm = new AlarmClock();
    const timeMinutesAdd = (minute) => {
        const date = new Date();
        date.setMinutes(date.getMinutes() + minute);

        let hours = date.getHours();
        let minutes = date.getMinutes();

        if (hours < 10) {
            hours = "0" + hours;
        }

        if(minutes < 10) {
            minutes = "0" + minutes;
        }

        return hours + ":" + minutes;
    };

    phoneAlarm.addClock(
        timeMinutesAdd(0),
        () => {
            console.log("Пора вставать");
        },
        1
    );

    phoneAlarm.addClock(
        timeMinutesAdd(1),
        () => {
            console.log("Давай, вставай уже!");
        },
        2
    );

    phoneAlarm.addClock(
        timeMinutesAdd(2),
        () => {
            console.log("Вставай, а то проспишь!");
        },
        3
    );

    phoneAlarm.printAlarms();
    phoneAlarm.start();
};

testCase();