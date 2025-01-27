const validarTitulo = (request, response, next) => {
  // RETIRAR O BODY DA REQUISIÇÃO
  const { body } = request;

  if(body.titulo === undefined) {
    return response.status(400).json({ message: 'o campo título é obrigatorio' });
  }

  if(body.titulo === '') {
    return response.status(400).json({ message: 'o campo título não pode ser vazio' });
  }

  next();
};

const validarStatus = (request, response, next) => {
  // RETIRAR O BODY DA REQUISIÇÃO
  const { body } = request;

  if(body.status === undefined) {
    return response.status(400).json({ message: 'o campo título é obrigatorio' });
  }

  if(body.status === '') {
    return response.status(400).json({ message: 'o campo título não pode ser vazio' });
  }
  
  next();
};



module.exports = {
  validarTitulo,
  validarStatus
};