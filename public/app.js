$(document).ready(function () {
  
    
    cargarPaquetes();
    cargarEnvios();
    cargarFacturas();
    cargarHistorial();
    cargarUsuarios();
    cargarRepartidores();
    cargarRutas();
    cargarReportes();
    cargarSucursales();
    cargarCasilleros();
    cargarComercios();
    cargarComprobantes();


    $('#form-paquetes').submit(function (e) {
        e.preventDefault();
        const nuevoPaquete = {
            tracking: $('#paq-tracking').val(),
            remitente: $('#paq-remitente').val(),
            destinatario: $('#paq-destinatario').val(),
            sucursalOrigen: $('#paq-sucursal').val(),
            descripcion: $('#paq-descripcion').val(),
            peso: parseFloat($('#paq-peso').val()),
            estado: $('#paq-estado').val()
        };

        $.ajax({
            url: 'http://localhost:3000/api/paquetes',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(nuevoPaquete),
            success: function (response) {
                alert(response.mensaje);
                $('#form-paquetes')[0].reset();
                cargarPaquetes();
            },
            error: function (error) {
                alert('Error al registrar el paquete');
                console.error(error);
            }
        });
    });

    function cargarPaquetes() {
        $.get('http://localhost:3000/api/paquetes', function (data) {
            let filas = '';
            data.forEach(p => {
                filas += `<tr>
                    <td>${p.tracking}</td>
                    <td>${p.remitente}</td>
                    <td>${p.destinatario}</td>
                    <td>${p.descripcion}</td>
                    <td>${p.peso} kg</td>
                    <td>${p.sucursalOrigen}</td>
                    <td><span class="badge bg-secondary">${p.estado}</span></td>
                </tr>`;
            });
            $('#tabla-paquetes').html(filas);
        });
    }

    $('#form-envios').submit(function (e) {
        e.preventDefault();
        const nuevoEnvio = {
            descripcionPaquete: $('#env-descripcion').val(),
            nombreRemitente: $('#env-remitente').val(),
            contactoRemitente: $('#env-con-remitente').val(),
            nombreDestinatario: $('#env-destinatario').val(),
            contactoDestinatario: $('#env-con-destinatario').val()
        };

        $.ajax({
            url: 'http://localhost:3000/api/envios',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(nuevoEnvio),
            success: function (response) {
                alert(response.mensaje);
                $('#form-envios')[0].reset();
                cargarEnvios();
            },
            error: function (error) {
                alert('Error al registrar el envío');
                console.error(error);
            }
        });
    });

    function cargarEnvios() {
        $.get('http://localhost:3000/api/envios', function (data) {
            let filas = '';
            data.forEach(e => {
                filas += `<tr>
                    <td>${e.descripcionPaquete}</td>
                    <td>${e.nombreRemitente}</td>
                    <td>${e.contactoRemitente}</td>
                    <td>${e.nombreDestinatario}</td>
                    <td>${e.contactoDestinatario}</td>
                </tr>`;
            });
            $('#tabla-envios').html(filas);
        });
    }

    $('#form-facturas').submit(function (e) {
        e.preventDefault();
        const nuevaFactura = {
            montoTotal: parseFloat($('#fac-monto').val()),
            impuestos: parseFloat($('#fac-impuesto').val()),
            metodoPago: $('#fac-metodo').val(),
            fechaPago: $('#fac-fecha').val(),
            estadoTransaccion: $('#fac-estado').val()
        };

        $.ajax({
            url: 'http://localhost:3000/api/facturas',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(nuevaFactura),
            success: function (response) {
                alert(response.mensaje);
                $('#form-facturas')[0].reset();
                cargarFacturas();
            },
            error: function (error) {
                alert('Error al registrar la factura');
                console.error(error);
            }
        });
    });

    function cargarFacturas() {
        $.get('http://localhost:3000/api/facturas', function (data) {
            let filas = '';
            data.forEach(f => {
                filas += `<tr>
                    <td>₡${f.montoTotal}</td>
                    <td>₡${f.impuestos}</td>
                    <td>${f.metodoPago}</td>
                    <td>${f.fechaPago ? f.fechaPago.split('T')[0] : ''}</td>
                    <td>${f.estadoTransaccion}</td>
                </tr>`;
            });
            $('#tabla-facturas').html(filas);
        });
    }

    $('#form-historial').submit(function (e) {
        e.preventDefault();
        const nuevoHistorial = {
            codigoRastreo: $('#his-codigo').val(),
            estadoActual: $('#his-estado').val(),
            idMensajero: $('#his-mensajero').val(),
            fecha: $('#his-fecha').val(),
            hora: $('#his-hora').val()
        };

        $.ajax({
            url: 'http://localhost:3000/api/historial',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(nuevoHistorial),
            success: function (response) {
                alert(response.mensaje);
                $('#form-historial')[0].reset();
                cargarHistorial();
            },
            error: function (error) {
                alert('Error al registrar el historial');
                console.error(error);
            }
        });
    });

    function cargarHistorial() {
        $.get('http://localhost:3000/api/historial', function (data) {
            let filas = '';
            data.forEach(h => {
                filas += `<tr>
                    <td>${h.codigoRastreo}</td>
                    <td>${h.estadoActual}</td>
                    <td>${h.fecha ? h.fecha.split('T')[0] : ''}</td>
                    <td>${h.hora}</td>
                    <td>${h.idMensajero}</td>
                </tr>`;
            });
            $('#tabla-historial').html(filas);
        });
    }

    $('#form-usuarios').submit(function (e) {
        e.preventDefault();
        const nuevoUsuario = {
            nombreCompleto: $('#usu-nombre').val(),
            correoElectronico: $('#usu-correo').val(),
            telefono: $('#usu-telefono').val(),
            contrasena: $('#usu-contrasena').val(),
            rolAsignado: $('#usu-rol').val()
        };

        $.ajax({
            url: 'http://localhost:3000/api/usuarios',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(nuevoUsuario),
            success: function (response) {
                alert(response.mensaje);
                $('#form-usuarios')[0].reset();
                cargarUsuarios();
            },
            error: function (error) {
                alert('Error al registrar el usuario');
                console.error(error);
            }
        });
    });

    function cargarUsuarios() {
        $.get('http://localhost:3000/api/usuarios', function (data) {
            let filas = '';
            data.forEach(u => {
                filas += `<tr>
                    <td>${u.nombreCompleto}</td>
                    <td>${u.correoElectronico}</td>
                    <td>${u.telefono}</td>
                    <td><span class="badge bg-info text-dark">${u.rolAsignado}</span></td>
                </tr>`;
            });
            $('#tabla-usuarios').html(filas);
        });
    }

    $('#form-repartidores').submit(function (e) {
        e.preventDefault();
        const nuevoRepartidor = {
            usuarioId: $('#rep-usuario-id').val(),
            tipoTransporte: $('#rep-tipo-transporte').val(),
            numeroPlaca: $('#rep-placa').val(),
            zonaAsignada: $('#rep-zona').val()
        };

        $.ajax({
            url: 'http://localhost:3000/api/repartidores',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(nuevoRepartidor),
            success: function (response) {
                alert(response.mensaje);
                $('#form-repartidores')[0].reset();
                cargarRepartidores();
            },
            error: function (error) {
                alert('Error al registrar el repartidor');
                console.error(error);
            }
        });
    });

    function cargarRepartidores() {
        $.get('http://localhost:3000/api/repartidores', function (data) {
            let filas = '';
            data.forEach(r => {
                filas += `<tr>
                    <td>${r.usuarioId}</td>
                    <td>${r.tipoTransporte}</td>
                    <td>${r.numeroPlaca}</td>
                    <td>${r.zonaAsignada}</td>
                </tr>`;
            });
            $('#tabla-repartidores').html(filas);
        });
    }

    $('#form-rutas').submit(function (e) {
        e.preventDefault();
        const trackingArray = $('#ruta-trackings').val().split(',').map(item => item.trim());
        const nuevaRuta = {
            repartidorId: $('#ruta-repartidor-id').val(),
            fechaProgramada: $('#ruta-fecha').val(),
            completada: $('#ruta-completada').is(':checked'),
            trackingsPaquetes: trackingArray
        };

        $.ajax({
            url: 'http://localhost:3000/api/rutas',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(nuevaRuta),
            success: function (response) {
                alert(response.mensaje);
                $('#form-rutas')[0].reset();
                cargarRutas();
            },
            error: function (error) {
                alert('Error al registrar la ruta');
                console.error(error);
            }
        });
    });

    function cargarRutas() {
        $.get('http://localhost:3000/api/rutas', function (data) {
            let filas = '';
            data.forEach(rt => {
                const estadoBadge = rt.completada ? '<span class="badge bg-success">Completada</span>' : '<span class="badge bg-warning text-dark">Pendiente</span>';
                filas += `<tr>
                    <td>${rt.fechaProgramada ? rt.fechaProgramada.split('T')[0] : ''}</td>
                    <td>${rt.repartidorId}</td>
                    <td>${rt.trackingsPaquetes ? rt.trackingsPaquetes.length : 0} paquetes</td>
                    <td>${estadoBadge}</td>
                </tr>`;
            });
            $('#tabla-rutas').html(filas);
        });
    }

    $('#form-reportes').submit(function (e) {
        e.preventDefault();
        const nuevoReporte = {
            fechaReporte: $('#repdiario-fecha').val(),
            totalRecibidos: parseInt($('#repdiario-recibidos').val()),
            entregasExitosas: parseInt($('#repdiario-exitosas').val()),
            paquetesDevueltos: parseInt($('#repdiario-devueltos').val())
        };

        $.ajax({
            url: 'http://localhost:3000/api/reportes',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(nuevoReporte),
            success: function (response) {
                alert(response.mensaje);
                $('#form-reportes')[0].reset();
                cargarReportes();
            },
            error: function (error) {
                alert('Error al registrar el reporte');
                console.error(error);
            }
        });
    });

    function cargarReportes() {
        $.get('http://localhost:3000/api/reportes', function (data) {
            let filas = '';
            data.forEach(rp => {
                filas += `<tr>
                    <td>${rp.fechaReporte ? rp.fechaReporte.split('T')[0] : ''}</td>
                    <td>${rp.totalRecibidos}</td>
                    <td>${rp.entregasExitosas}</td>
                    <td>${rp.paquetesDevueltos}</td>
                </tr>`;
            });
            $('#tabla-reportes').html(filas);
        });
    }

    $('#form-sucursales').submit(function (e) {
        e.preventDefault();
        const telArray = $('#suc-telefonos').val().split(',').map(item => item.trim());
        const nuevaSucursal = {
            nombreSucursal: $('#suc-nombre').val(),
            provincia: $('#suc-provincia').val(),
            encargado: $('#suc-encargado').val(),
            telefonos: telArray
        };

        $.ajax({
            url: 'http://localhost:3000/api/sucursales',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(nuevaSucursal),
            success: function (response) {
                alert(response.mensaje);
                $('#form-sucursales')[0].reset();
                cargarSucursales();
            },
            error: function (error) {
                alert('Error al registrar la sucursal');
                console.error(error);
            }
        });
    });

    function cargarSucursales() {
        $.get('http://localhost:3000/api/sucursales', function (data) {
            let filas = '';
            data.forEach(s => {
                filas += `<tr>
                    <td>${s.nombreSucursal}</td>
                    <td>${s.provincia}</td>
                    <td>${s.encargado}</td>
                    <td>${s.telefonos ? s.telefonos.join(', ') : ''}</td>
                </tr>`;
            });
            $('#tabla-sucursales').html(filas);
        });
    }

    $('#form-casilleros').submit(function (e) {
        e.preventDefault();
        const nuevoCasillero = {
            codigoCasillero: $('#cas-codigo').val(),
            usuarioId: $('#cas-usuario').val(),
            tamano: $('#cas-tamano').val(),
            estado: $('#cas-estado').val()
        };

        $.ajax({
            url: 'http://localhost:3000/api/casilleros',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(nuevoCasillero),
            success: function (response) {
                alert(response.mensaje);
                $('#form-casilleros')[0].reset();
                cargarCasilleros();
            },
            error: function (error) {
                alert('Error al registrar el casillero');
                console.error(error);
            }
        });
    });

    function cargarCasilleros() {
        $.get('http://localhost:3000/api/casilleros', function (data) {
            let filas = '';
            data.forEach(c => {
                filas += `<tr>
                    <td>${c.codigoCasillero}</td>
                    <td>${c.usuarioId}</td>
                    <td>${c.tamano}</td>
                    <td><span class="badge bg-primary">${c.estado}</span></td>
                </tr>`;
            });
            $('#tabla-casilleros').html(filas);
        });
    }

    $('#form-comercios').submit(function (e) {
        e.preventDefault();
        const nuevoComercio = {
            codigoComercio: $('#com-codigo').val(),
            nombreComercio: $('#com-nombre').val(),
            contactoRepresentante: $('#com-contacto').val(),
            porcentajeDescuento: parseFloat($('#com-descuento').val())
        };

        $.ajax({
            url: 'http://localhost:3000/api/comercios',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(nuevoComercio),
            success: function (response) {
                alert(response.mensaje);
                $('#form-comercios')[0].reset();
                cargarComercios();
            },
            error: function (error) {
                alert('Error al registrar el comercio afiliado');
                console.error(error);
            }
        });
    });

    function cargarComercios() {
        $.get('http://localhost:3000/api/comercios', function (data) {
            let filas = '';
            data.forEach(co => {
                filas += `<tr>
                    <td>${co.codigoComercio}</td>
                    <td>${co.nombreComercio}</td>
                    <td>${co.contactoRepresentante}</td>
                    <td>${co.porcentajeDescuento}%</td>
                </tr>`;
            });
            $('#tabla-comercios').html(filas);
        });
    }

    $('#form-comprobantes').submit(function (e) {
        e.preventDefault();
        const nuevoComprobante = {
            codigoComprobante: $('#comp-codigo').val(),
            montoCancelado: parseFloat($('#comp-monto').val()),
            fechaEmision: $('#comp-fecha').val(),
            detalleTransaccion: $('#comp-detalle').val()
        };

        $.ajax({
            url: 'http://localhost:3000/api/comprobantes',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(nuevoComprobante),
            success: function (response) {
                alert(response.mensaje);
                $('#form-comprobantes')[0].reset();
                cargarComprobantes();
            },
            error: function (error) {
                alert('Error al registrar el comprobante');
                console.error(error);
            }
        });
    });

    function cargarComprobantes() {
        $.get('http://localhost:3000/api/comprobantes', function (data) {
            let filas = '';
            data.forEach(cp => {
                filas += `<tr>
                    <td>${cp.codigoComprobante}</td>
                    <td>₡${cp.montoCancelado}</td>
                    <td>${cp.fechaEmision ? cp.fechaEmision.split('T')[0] : ''}</td>
                    <td>${cp.detalleTransaccion}</td>
                </tr>`;
            });
            $('#tabla-comprobantes').html(filas);
        });
    }

});