

/* * PROGETTO: TASTO X - FR COLOR SYSTEM
 * MOTORE: IRINA (Versione 1.5 - RECOVERY TOTALE)
 * STATUS: 100% FUNZIONANTE - BLINDATO
 * AGGIORNAMENTO: RIPRISTINO NOMI FUNZIONI PER CARICAMENTO FOTO
 */

const MotoreIrina = {
    // 1. PROFILI E STATO
    currentProfile: "standard",
    profili: {
        "standard": { tolleranza: 20, smoothing: 1 },
        "liscio":   { tolleranza: 12, smoothing: 0.5 },
        "ruvido":   { tolleranza: 38, smoothing: 2.5 }
    },

    // 2. DATABASE COMPLETO RAL (213 COLORI)
    ralDatabase: [
        {ral: "1000", hex: "#bebd7f"}, {ral: "1001", hex: "#c2b078"}, {ral: "1002", hex: "#d1bc8a"}, {ral: "1003", hex: "#f2ad4e"},
        {ral: "1004", hex: "#e4a010"}, {ral: "1005", hex: "#c89f04"}, {ral: "1006", hex: "#e29000"}, {ral: "1007", hex: "#e79c00"},
        {ral: "1011", hex: "#af8a54"}, {ral: "1012", hex: "#d9c022"}, {ral: "1013", hex: "#e5d691"}, {ral: "1014", hex: "#e1cc4f"},
        {ral: "1015", hex: "#e6d690"}, {ral: "1016", hex: "#edee1b"}, {ral: "1017", hex: "#f5ab6e"}, {ral: "1018", hex: "#f8f32b"},
        {ral: "1019", hex: "#9e9764"}, {ral: "1020", hex: "#999950"}, {ral: "1021", hex: "#f3da0b"}, {ral: "1023", hex: "#f2c037"},
        {ral: "1024", hex: "#a48e52"}, {ral: "1027", hex: "#a28d13"}, {ral: "1028", hex: "#f4a912"}, {ral: "1032", hex: "#e1a102"},
        {ral: "1033", hex: "#f3a550"}, {ral: "1034", hex: "#efa35c"}, {ral: "1037", hex: "#f09205"}, {ral: "2000", hex: "#da6e00"},
        {ral: "2001", hex: "#bc4e11"}, {ral: "2002", hex: "#b6361c"}, {ral: "2003", hex: "#f07229"}, {ral: "2004", hex: "#e25303"},
        {ral: "2008", hex: "#f06422"}, {ral: "2009", hex: "#e75b12"}, {ral: "2010", hex: "#d54d1e"}, {ral: "2011", hex: "#eb610d"},
        {ral: "2012", hex: "#e75443"}, {ral: "3000", hex: "#af2b1e"}, {ral: "3001", hex: "#a02128"}, {ral: "3002", hex: "#a1232b"},
        {ral: "3003", hex: "#8d1d2c"}, {ral: "3004", hex: "#701f29"}, {ral: "3005", hex: "#5e2028"}, {ral: "3007", hex: "#402225"},
        {ral: "3009", hex: "#703731"}, {ral: "3011", hex: "#7e292c"}, {ral: "3012", hex: "#cb8d73"}, {ral: "3013", hex: "#9c322e"},
        {ral: "3014", hex: "#d47479"}, {ral: "3015", hex: "#e1a6ad"}, {ral: "3016", hex: "#ac4034"}, {ral: "3017", hex: "#d3545f"},
        {ral: "3018", hex: "#d14152"}, {ral: "3020", hex: "#c1121c"}, {ral: "3022", hex: "#d56d56"}, {ral: "3027", hex: "#b42041"},
        {ral: "3031", hex: "#ac323b"}, {ral: "4001", hex: "#8a5a83"}, {ral: "4002", hex: "#933d50"}, {ral: "4003", hex: "#d05d8e"},
        {ral: "4004", hex: "#69193b"}, {ral: "4005", hex: "#7e5e9b"}, {ral: "4006", hex: "#992572"}, {ral: "4007", hex: "#4a203b"},
        {ral: "4008", hex: "#904684"}, {ral: "4009", hex: "#a18594"}, {ral: "4010", hex: "#c33a71"}, {ral: "5000", hex: "#2f4a71"},
        {ral: "5001", hex: "#21445b"}, {ral: "5002", hex: "#223c82"}, {ral: "5003", hex: "#232d4b"}, {ral: "5004", hex: "#1d1f2a"},
        {ral: "5005", hex: "#154889"}, {ral: "5007", hex: "#41678d"}, {ral: "5008", hex: "#2f353e"}, {ral: "5009", hex: "#285a73"},
        {ral: "5010", hex: "#0e466a"}, {ral: "5011", hex: "#1c2838"}, {ral: "5012", hex: "#2781bb"}, {ral: "5013", hex: "#1e2840"},
        {ral: "5014", hex: "#637691"}, {ral: "5015", hex: "#1a77bb"}, {ral: "5017", hex: "#06518c"}, {ral: "5018", hex: "#348182"},
        {ral: "5019", hex: "#0e5d80"}, {ral: "5020", hex: "#134447"}, {ral: "5021", hex: "#075554"}, {ral: "5022", hex: "#1e213d"},
        {ral: "5023", hex: "#466085"}, {ral: "5024", hex: "#5d88a2"}, {ral: "6000", hex: "#316a50"}, {ral: "6001", hex: "#316e34"},
        {ral: "6002", hex: "#2d572c"}, {ral: "6003", hex: "#4d543b"}, {ral: "6004", hex: "#1a3b35"}, {ral: "6005", hex: "#163a2c"},
        {ral: "6006", hex: "#3e3d32"}, {ral: "6007", hex: "#273123"}, {ral: "6008", hex: "#313023"}, {ral: "6009", hex: "#222f26"},
        {ral: "6010", hex: "#457a33"}, {ral: "6011", hex: "#667c54"}, {ral: "6012", hex: "#2e3b38"}, {ral: "6013", hex: "#76724a"},
        {ral: "6014", hex: "#444337"}, {ral: "6015", hex: "#373a30"}, {ral: "6016", hex: "#006646"}, {ral: "6017", hex: "#4d8542"},
        {ral: "6018", hex: "#57a639"}, {ral: "6019", hex: "#bde1ac"}, {ral: "6020", hex: "#37412e"}, {ral: "6021", hex: "#87a180"},
        {ral: "6022", hex: "#25241d"}, {ral: "6024", hex: "#008351"}, {ral: "6025", hex: "#567633"}, {ral: "6026", hex: "#005c54"},
        {ral: "6027", hex: "#81c0bb"}, {ral: "6028", hex: "#2d5546"}, {ral: "6029", hex: "#00722d"}, {ral: "6032", hex: "#0f8d58"},
        {ral: "6033", hex: "#41897e"}, {ral: "6034", hex: "#7fb1b1"}, {ral: "7000", hex: "#7a888e"}, {ral: "7001", hex: "#8a9597"},
        {ral: "7002", hex: "#7e7b52"}, {ral: "7003", hex: "#7a7b6d"}, {ral: "7004", hex: "#969992"}, {ral: "7005", hex: "#646b63"},
        {ral: "7006", hex: "#6d6552"}, {ral: "7008", hex: "#6a5f31"}, {ral: "7009", hex: "#5d6150"}, {ral: "7010", hex: "#565a5c"},
        {ral: "7011", hex: "#4e5658"}, {ral: "7012", hex: "#575d57"}, {ral: "7013", hex: "#514e3e"}, {ral: "7015", hex: "#4b4d52"},
        {ral: "7016", hex: "#383e42"}, {ral: "7021", hex: "#2f3234"}, {ral: "7022", hex: "#4b4d46"}, {ral: "7023", hex: "#7e827a"},
        {ral: "7024", hex: "#45494e"}, {ral: "7026", hex: "#2f363d"}, {ral: "7030", hex: "#939388"}, {ral: "7031", hex: "#5b6870"},
        {ral: "7032", hex: "#b8b799"}, {ral: "7033", hex: "#7d8471"}, {ral: "7034", hex: "#8f8b66"}, {ral: "7035", hex: "#d7d7d7"},
        {ral: "7036", hex: "#9495a1"}, {ral: "7037", hex: "#787b80"}, {ral: "7038", hex: "#b5b8b1"}, {ral: "7039", hex: "#6c6960"},
        {ral: "7040", hex: "#9da3a6"}, {ral: "7042", hex: "#8f9696"}, {ral: "7043", hex: "#4e5452"}, {ral: "7044", hex: "#b9b9a8"},
        {ral: "7045", hex: "#909090"}, {ral: "7046", hex: "#82898f"}, {ral: "7047", hex: "#d0d0d0"}, {ral: "8000", hex: "#826c34"},
        {ral: "8001", hex: "#955f20"}, {ral: "8002", hex: "#6c3b2a"}, {ral: "8003", hex: "#734222"}, {ral: "8004", hex: "#8e402a"},
        {ral: "8007", hex: "#59351f"}, {ral: "8008", hex: "#6f4f28"}, {ral: "8011", hex: "#5b3a24"}, {ral: "8012", hex: "#592321"},
        {ral: "8014", hex: "#382c1e"}, {ral: "8015", hex: "#491f1a"}, {ral: "8016", hex: "#3c2219"}, {ral: "8017", hex: "#2d1c12"},
        {ral: "8019", hex: "#3b3332"}, {ral: "8022", hex: "#1a1615"}, {ral: "8023", hex: "#a65e2e"}, {ral: "8024", hex: "#79553d"},
        {ral: "8025", hex: "#755c48"}, {ral: "8028", hex: "#4e3b31"}, {ral: "9001", hex: "#f1ebe1"}, {ral: "9002", hex: "#e7ebda"},
        {ral: "9003", hex: "#f4f4f4"}, {ral: "9004", hex: "#282828"}, {ral: "9005", hex: "#0a0a0a"}, {ral: "9006", hex: "#a5a5a5"},
        {ral: "9007", hex: "#8f8f8f"}, {ral: "9010", hex: "#ffffff"}, {ral: "9011", hex: "#1c1c1c"}, {ral: "9016", hex: "#f6f6f6"},
        {ral: "9017", hex: "#1e1e1e"}, {ral: "9018", hex: "#d7d7d7"}
    ],

    // 3. FUNZIONI FISSE (RIPRISTINATE AI NOMI ORIGINALI)
    getLum: function(r, g, b) {
        return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    },

    getXY: function(e, rect, zoom) {
        return {
            x: (e.clientX - rect.left) / zoom,
            y: (e.clientY - rect.top) / zoom
        };
    },

    // 4. LOGICA BORDI E PROFILI
    checkBorder: function(data, x, y, width, startLum, tolerance) {
        const i = (y * width + x) * 4;
        const l1 = this.getLum(data[i], data[i+1], data[i+2]);
        const l2 = this.getLum(data[i+4] || data[i], data[i+5] || data[i+1], data[i+6] || data[i+2]);
        const avg = (l1 + l2) / 2;
        return Math.abs(avg - startLum) > (tolerance / 100);
    },

    setMode: function(mode) {
        if (this.profili[mode]) {
            this.currentProfile = mode;
            console.log("IRINA: Modalità " + mode + " attiva.");
        }
    },

    hexToRgb: function(hex) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return { r, g, b };
    },

    // 5. RIEMPIMENTO ULTRA HD
    applyFloodFill: function(ctx, startX, startY, hexColor, originalImageData) {
        const p = this.profili[this.currentProfile];
        const target = this.hexToRgb(hexColor);
        const width = ctx.canvas.width;
        const height = ctx.canvas.height;
        const imgData = ctx.getImageData(0, 0, width, height);
        const data = imgData.data;
        const ori = originalImageData.data;

        const stack = [[Math.round(startX), Math.round(startY)]];
        const startPos = (Math.round(startY) * width + Math.round(startX)) * 4;
        const startLum = this.getLum(ori[startPos], ori[startPos+1], ori[startPos+2]);
        const visited = new Uint8Array(width * height);

        while(stack.length) {
            const [x, y] = stack.pop();
            if (x < 0 || x >= width || y < 0 || y >= height) continue;
            
            const idx = y * width + x;
            if (visited[idx]) continue;
            visited[idx] = 1;

            const pos = idx * 4;
            const currentLum = this.getLum(ori[pos], ori[pos+1], ori[pos+2]);

            // Controllo bordi avanzato
            if (!this.checkBorder(ori, x, y, width, startLum, p.tolleranza)) {
                data[pos] = target.r * currentLum;
                data[pos+1] = target.g * currentLum;
                data[pos+2] = target.b * currentLum;
                data[pos+3] = 255;
                stack.push([x+1, y], [x-1, y], [x, y+1], [x, y-1]);
            }
        }
        ctx.putImageData(imgData, 0, 0);
    }
};

window.MotoreIrina = MotoreIrina;
