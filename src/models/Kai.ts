/**
 * Kai is the recorder of the world. 
 * 
 * "keeper of the keys and earth"
 */
export class Kai {
    things: Map<string, Thing> = new Map<string, Thing>(); 
    zones: Zone[] = [];

    load(encodedKai: string) {
        // TODO: Validator
        const decodedKai = JSON.parse(encodedKai);
        this.things = new Map(decodedKai.things);
        this.zones = decodedKai.zones;
    }

    encode() {
        return JSON.stringify({
            things: Array.from(this.things.entries()),
            zones: this.zones
        });
    }
}

/**
 * Things' identities.
 */
interface Thing {
    id: string,
    name: string,
    summary: string,
}

/**
 * Thing placements
 */
interface Pin {
    thingId: string,
    x: number,
    y: number,
}

/**
 * Zone
 */
interface Zone {
    numRows: number;
    numCols: number;
    pins: Pin[];
    ground: Plot[][];
}

/**
 * Patch of land
 */
interface Plot {
}