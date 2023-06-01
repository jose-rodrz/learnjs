const fs = require('fs');

const read_file = (fname, cb) => {
    fs.stat(fname, (err, stats) => {
        if(err) {
            cb(err, null);
        } else {
            fs.open(fname, 'r', (err, fd) => {
                if(err) {
                    cb(err, null);
                } else {
                  let inbuf = Buffer.alloc(stats.size);
                  fs.read(fd, inbuf, 0, stats.size, null, (err, bytesRead, buffer) => {
                    if(err) {
                        cb(err, null);
                    } else {
                      cb(err, buffer);
                    }
                    });
                }
        });
        }
    });
}

read_file('test.txt', (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Result is ${result.toString()}`);
    }
});