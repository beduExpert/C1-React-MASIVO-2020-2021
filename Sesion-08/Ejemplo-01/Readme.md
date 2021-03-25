## App responsiva

### OBJETIVO
- Material UI
- Grids

#### REQUISITOS 
- Tener Node instalado.

#### DESARROLLO

1. Instalamos Material UI con `npm install --save @material-ui/core` y cuando termine, la comenzamos con `npm start`.

2. Utilizar `Grid` y dejar de usar el CSS que hicimos para complementar Bulma.
```
// ...código omitido...
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// ...código omitido...

// ...código omitido...
  return (
    <Container>
      <BrowserRouter>
        <Grid
          container
          alignItems="center"
          justify="center"
          className="main"
        >
          <Grid item md={4} sm={6} xs={12} className="wrapper">
            <Switch>
              <Route path="/" exact>
                <Home
                  filtered={filtered}
                  show={show}
                  setShow={setShow}
                  handleClickToggleDone={handleClickToggleDone}
                  handleClickDelete={handleClickDelete}
                  addTask={addTask}
                />
              </Route>
              <Route path="/details/:id">
                <TodoDetails url={URL} />
              </Route>
              <Route component=NotFound} />
            </Switch>
          </Grid>
        </Grid>
      </BrowserRouter>
    </Container>
  )
// ...código omitido...
```

3. Modificar el contenido de `App.css`
```
.main {
  height: 100vh;
}

.wrapper {
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);
}
```

4. Eliminar el archivo `index.css`

5. Eliminar la referencia al archivo `index.css` en `index.js`
