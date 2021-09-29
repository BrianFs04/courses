// Classes
class Dates {
    constructor() {
        this.dates = [];
    }

    addDate(date) {
        this.dates = [...this.dates, date];
    }

    deleteDate(id) {
        this.dates = this.dates.filter((date) => date.id !== id);
    }

    editDate(updateDate) {
        this.dates = this.dates.map((date) =>
            date.id === updateDate.id ? updateDate : date
        );
    }
}

export default Dates;
