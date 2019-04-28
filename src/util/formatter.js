export default class Formatter {
    static temperature(v) {
        return Math.round(v);
    }
    static latitude(v) {
        return v.toFixed(6);
    }
    static longitude(v) {
        return v.toFixed(6);
    }
}