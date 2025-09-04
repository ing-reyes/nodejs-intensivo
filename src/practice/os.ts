import * as os from "os";

// console.log( "Arquitectura: ", os.arch() );
// console.log( "Cpus: ", os.cpus() );
// console.log( "Sistema de guardado/tipos de bytes: ", os.endianness() ); // LE Little-Endian y BE Big-Endian
// console.log( "Memoria disponible en Bytes: ", os.freemem() );
// console.log( "Ruta del carpeta donde estamos: ", os.homedir() );
// console.log( "Nombre del usuario de OS: ", os.hostname() );
// console.log( "Configuracion de red: ", os.networkInterfaces() );
// console.log( "Sistema Operativo: ", os.platform() );
// console.log( "Ruta de archivos temporales: ", os.tmpdir() );
// console.log( "Momoria total: ", os.totalmem() );
// console.log( "Cantidad de teimpo de uso (seg): ", os.uptime() );
// console.log( "Informacion de usuario: ", os.userInfo() );
// console.log( "Version del SO: ", os.version() );

// Generar un reporte detallado del Sistemas Operativo
const totalCpus = os.cpus().length;
const platform = os.platform();
const totalMem = os.totalmem();
const freemem = os.freemem();
const arch = os.arch();

export const report = {
  totalCpus,
  platform,
  totalMem,
  freemem,
  arch,
};

// console.log('Reporte detallado del Sistema Operativo');
// console.log(report);

