const API_URL = '/api/paquetes';

document.addEventListener('DOMContentLoaded', cargarPaquetes);
document.getElementById('paquete-form').addEventListener('submit', guardarPaquete);

// GET: Cargamos paquetes
async function cargarPaquetes() {
  try {
    const res = await fetch(API_URL);
    const paquetes = await res.json();
    const tbody = document.getElementById('tabla-paquetes');
    tbody.innerHTML = '';

    if (paquetes.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="8" class="text-center text-muted py-4">No hay paquetes registrados aún en CorreosDB.</td>
        </tr>`;
      return;
    }

    paquetes.forEach(p => {
      // Color según el estado
      let colorEstado = 'bg-secondary';
      if (p.estado === 'En Tránsito') colorEstado = 'bg-warning text-dark';
      if (p.estado === 'Entregado') colorEstado = 'bg-success';
      if (p.estado === 'Devuelto') colorEstado = 'bg-danger';

      tbody.innerHTML += `
        <tr>
          <td><span class="badge bg-primary fs-6">${p.trackingCode}</span></td>
          <td class="fw-semibold">${p.remitente}</td>
          <td>${p.destinatario}</td>
          <td>${p.descripcion}</td>
          <td><span class="badge bg-info text-dark">${p.pesoKg} kg</span></td>
          <td><small class="text-muted">${p.sucursalOrigen}</small></td>
          <td><span class="badge ${colorEstado}">${p.estado}</span></td>
          <td class="text-center">
            <button class="btn btn-sm btn-outline-warning me-1" 
              onclick="editarPaquete('${p._id}', '${p.trackingCode}', '${p.remitente}', '${p.destinatario}', '${p.descripcion}', ${p.pesoKg}, '${p.sucursalOrigen}', '${p.estado}')">
               Editar
            </button>
            <button class="btn btn-sm btn-outline-danger" 
              onclick="eliminarPaquete('${p._id}')">
               Eliminar
            </button>
          </td>
        </tr>
      `;
    });
  } catch (error) {
    console.error('Error al consultar la API de paquetes:', error);
  }
}

// POST / PUT: Creamos o actualizamos
async function guardarPaquete(e) {
  e.preventDefault();
  
  const id = document.getElementById('paquete-id').value;
  const payload = {
    trackingCode: document.getElementById('trackingCode').value,
    remitente: document.getElementById('remitente').value,
    destinatario: document.getElementById('destinatario').value,
    sucursalOrigen: document.getElementById('sucursalOrigen').value,
    descripcion: document.getElementById('descripcion').value,
    pesoKg: parseFloat(document.getElementById('pesoKg').value),
    estado: document.getElementById('estado').value
  };

  const metodo = id ? 'PUT' : 'POST';
  const url = id ? `${API_URL}/${id}` : API_URL;

  try {
    const res = await fetch(url, {
      method: metodo,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      limpiarFormulario();
      cargarPaquetes();
    } else {
      const errData = await res.json();
      alert(`Error: ${errData.mensaje || 'No se pudo guardar el paquete'}`);
    }
  } catch (error) {
    console.error('Error al guardar:', error);
  }
}

// Editor del paquete
function editarPaquete(id, tracking, remitente, destinatario, desc, peso, sucursal, estado) {
  document.getElementById('paquete-id').value = id;
  document.getElementById('trackingCode').value = tracking;
  document.getElementById('remitente').value = remitente;
  document.getElementById('destinatario').value = destinatario;
  document.getElementById('sucursalOrigen').value = sucursal;
  document.getElementById('descripcion').value = desc;
  document.getElementById('pesoKg').value = peso;
  document.getElementById('estado').value = estado;

  document.getElementById('form-title').innerText = 'Editar Paquete';
  document.getElementById('btn-guardar').innerText = 'Actualizar Paquete';
  document.getElementById('btn-guardar').className = 'btn btn-warning';
  document.getElementById('btn-cancelar').classList.remove('d-none');
}

// DELETE: Eliminamos el registro
async function eliminarPaquete(id) {
  if (confirm('¿Deseas eliminar este paquete?')) {
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      if (res.ok) {
        cargarPaquetes();
      }
    } catch (error) {
      console.error('Error al eliminar:', error);
    }
  }
}

// Restablecemos el formulario
function limpiarFormulario() {
  document.getElementById('paquete-id').value = '';
  document.getElementById('paquete-form').reset();
  document.getElementById('form-title').innerText = 'Registrar Nuevo Paquete';
  document.getElementById('btn-guardar').innerText = 'Guardar Paquete';
  document.getElementById('btn-guardar').className = 'btn btn-success';
  document.getElementById('btn-cancelar').classList.add('d-none');
}
