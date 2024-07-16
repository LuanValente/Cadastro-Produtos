import express from 'express';
import { body, validationResult } from 'express-validator';
import Product from '../models/product.js';

const router = express.Router();

// Rota para criar um novo produto
router.post('/products', [
  // Validações dos campos de entrada
  body('nome').notEmpty().withMessage('Nome é obrigatório'),
  body('preco').isDecimal().withMessage('Preço deve ser um número')
], async (req, res) => {
  // Verifica se há erros de validação
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Extrai os dados do corpo da requisição
    const { nome, descricao, preco } = req.body;
    // Cria um novo produto no banco de dados
    const product = await Product.create({ nome, descricao, preco });
    // Retorna o produto criado com status 201
    res.status(201).json(product);
  } catch (error) {
    // Tratamento de erro para falha ao criar produto
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
});

// Rota para listar todos os produtos
router.get('/products', async (req, res) => {
  try {
    // Busca todos os produtos no banco de dados
    const products = await Product.findAll();
    // Retorna a lista de produtos com status 200
    res.status(200).json(products);
  } catch (error) {
    // Tratamento de erro para falha ao buscar produtos
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

// Rota para obter um produto específico por ID
router.get('/products/:id', async (req, res) => {
  try {
    // Busca o produto pelo ID fornecido
    const product = await Product.findByPk(req.params.id);
    // Verifica se o produto existe
    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    // Retorna o produto encontrado com status 200
    res.status(200).json(product);
  } catch (error) {
    // Tratamento de erro para falha ao buscar produto
    res.status(500).json({ error: 'Erro ao buscar produto' });
  }
});

// Rota para atualizar um produto existente
router.put('/products/:id', [
  // Validações opcionais dos campos de entrada
  body('nome').optional().notEmpty().withMessage('Nome é obrigatório'),
  body('preco').optional().isDecimal().withMessage('Preço deve ser um número')
], async (req, res) => {
  // Verifica se há erros de validação
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Extrai os dados do corpo da requisição
    const { nome, descricao, preco } = req.body;
    // Busca o produto pelo ID fornecido
    const product = await Product.findByPk(req.params.id);
    // Verifica se o produto existe
    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    // Atualiza o produto com os novos dados
    await product.update({ nome, descricao, preco });
    // Retorna o produto atualizado com status 200
    res.status(200).json(product);
  } catch (error) {
    // Tratamento de erro para falha ao atualizar produto
    res.status(500).json({ error: 'Erro ao atualizar produto' });
  }
});

// Rota para deletar um produto existente
router.delete('/products/:id', async (req, res) => {
  try {
    // Busca o produto pelo ID fornecido
    const product = await Product.findByPk(req.params.id);
    // Verifica se o produto existe
    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    // Deleta o produto do banco de dados
    await product.destroy();
    // Retorna status 204 (sem conteúdo) indicando sucesso
    res.status(204).send();
  } catch (error) {
    // Tratamento de erro para falha ao deletar produto
    res.status(500).json({ error: 'Erro ao deletar produto' });
  }
});

export default router;
