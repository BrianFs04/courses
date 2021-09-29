// exec: controlar procesos
import exec from "child_process";

//exec.exec("explorer");
exec.exec("dir", (err, stdout) => {
    if (err) {
        throw err;
    }
    console.log(stdout);
});
