document.getElementById('nav').innerHTML = `
<nav id="nav" class="col-md-3 col-lg-2 d-md-block sidebar collapse">
      <div class="position-sticky pt-3" id="menu">
      <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
          <span>Menu principal</span>
          <a class="link-secondary" href="#nav" aria-label="Add a new report">
            <span data-feather="plus-circle" class="align-text-bottom"></span>
          </a>
        </h6>
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="dashboard.html">
              <span  class="align-text-bottom fas fa-home"></span>
              Dashboard
            </a>
          </li>  
          <li class="nav-item">
            <a class="nav-link" href="productos.html">
              <span  class="align-text-bottom fas fa-box-open"></span>
              Productos
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="compra.html">
              <span class="align-text-bottom fas fa-shopping-cart"></span>
              Compras
            </a>
          </li>
          
          </li>
          <li class="nav-item">
            <a class="nav-link" href="proveedor.html">
              <span  class="align-text-bottom fas fa-headset"></span>
              Proveedor 
            </a> 
            </li>

          <li class="nav-item">
            <a class="nav-link" href="usuario.html">
            <i class="fa-duotone fa-id-card"></i> 
              Registrar-Usuario
            </a> 
            </li>

              <li class="nav-item">
              <a class="nav-link" href="index1.html">
              <span  class="align-text-bottom fas fa-sign-out-alt"></span>
              Cerrar Cession
              </a>
          </li>
        </ul>
      </div>
    </nav>
`;