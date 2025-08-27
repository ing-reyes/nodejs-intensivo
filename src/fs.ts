import * as fs from "fs";
import * as path from "path";

//! Modulo FS
//* 1. Crear Carpeta 
// ASINCRONO
function createFolder(pathFolder: string, nameFolder: string) {
    fs.mkdir(path.resolve(__dirname, `${pathFolder}/${nameFolder}`), { recursive: true }, (err) => {
        if (err) throw new Error("La carpeta no se creo");

        console.log("Carpeta creada")
    });
}
// SINCRONO
function createFolderSync(pathFolder: string, nameFolder: string) {
    fs.mkdirSync(path.resolve(__dirname, `${pathFolder}/${nameFolder}`), { recursive: true });
}

//* 2. Verificar si una carpeta o archivo existe
function existsFolder(pathFolder: string, nameFolder: string) {
    const pathF = path.resolve(__dirname, `${pathFolder}/${nameFolder}`)

    if (!fs.existsSync(pathF)) {
        createFolder("../", nameFolder);
    } else {
        console.log("La carpeta ya existe")
    }
}

//* 3. Crear un archivo y escribir en el
// ASINCRONO
function writeFile(pathFolder: string, nameFile: string, data: string) {
    fs.writeFile(path.resolve(__dirname, `${pathFolder}/${nameFile}`), data, (err) => {
        if (err) throw new Error("Archivo no se pudo crear")

        console.log("Archivo creado");
    })
}

// SINCRONO
function writeFileSync(pathFolder: string, nameFile: string, data: string) {
    fs.writeFileSync(path.resolve(__dirname, `${pathFolder}/${nameFile}`), data)
}

//* 4. Agregar contenido a archivo existente
// ASINCRONO
function addContentFile(pathFolder: string, nameFile: string, data: string) {
    fs.appendFile(path.resolve(__dirname, `${pathFolder}/${nameFile}`), data, (err) => {
        if (err) throw new Error("No se pudo agregar contenido al crhivo")

        console.log("Contenido agregeado")
    })
}

// SINCRONO
function addContentFileSync(pathFolder: string, nameFile: string, data: string) {
    fs.appendFileSync(path.resolve(__dirname, `${pathFolder}/${nameFile}`), data)
}

//* 5. Renombrar carpeta o archivo
// ASINCRONO
function rename(pathFolder: string, nameFile: string, newNameFile: string) {
    fs.rename(path.resolve(__dirname, `${pathFolder}/${nameFile}`), path.resolve(__dirname, `${pathFolder}/${newNameFile}`), (err) => {
        if (err) throw new Error("No se pudo renombrar la carpeta o archivo")

        console.log("Carpeta o archivo renombrado")
    })
}

// SINCRONO
function renameSync(pathFolder: string, nameFile: string, newNameFile: string) {
    fs.renameSync(path.resolve(__dirname, `${pathFolder}/${nameFile}`), path.resolve(__dirname, `${pathFolder}/${newNameFile}`))
}

//! NOTA: Se usa el nuevo metodo "rm" para eliminar carpetas, archivos (Aun si las carpetas estan llenas o vacias)
//! Antes de usar rmdir para elimiar directorios vacios. Pero ahora solo se usa rm.
//* 6. Eliminar archivo
function rm(folderPath: string) {
    fs.rm(path.resolve(__dirname, folderPath), (err) => {
        if (err) throw new Error("No se pudo eliminar la carpeta o archivo");

        console.log("Carpeta o archivo eliminado")
    })
}


//* 7. Eliminar carpeta
//! Reutilizar rm para eliminar carpeta 

//* 8. Leer todas las carpetas de una ruta
// ASINCRONO
function readdir(folderPath: string) {
    return fs.readdir(path.resolve(__dirname, folderPath), { recursive: true }, (err) => {
        if (err) throw new Error("Ocurrio un error al momento de leer las carpetas");

        console.log("Carpetas leidas")
    })
}

// SINCRONO
function readdirSync(folderPath: string) {
    return fs.readdirSync(path.resolve(__dirname, folderPath), { recursive: true })
}