// src/routes/user_routes.ts
import express from 'express';
import {
    saveMethodHandler,
    createSubjectHandler,
    getAllSubjectsHandler,
    getSubjectByIdHandler,
    updateSubjectHandler,
    deleteSubjectHandler,
    getStudentsBySubjectIdHandler
} from '../subject/subject_controller.js';

const router = express.Router();

/**
 * @openapi
 * /api/subject:
 *   post:
 *     summary: Crea una nueva materia
 *     description: Añade los detalles de una nueva materia.
 *     tags:
 *       - Subject
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               teacher:
 *                 type: string
 *               students:
 *                 type: array
 *                 items:
 *                   type: ObjectId
 *     responses:
 *       200:
 *         description: Éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   teacher:
 *                     type: string
 *                   students:
 *                     type: array
 *                     items:
 *                       type: ObjectId
 */

router.post('/subject', createSubjectHandler);

/**
 * @openapi
 * /api/subject:
 *   get:
 *     summary: Obtiene todas las materias
 *     description: Retorna una lista de todas las materias.
 *     tags:
 *       - Subject
 *     responses:
 *       200:
 *         description: Éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   teacher:
 *                     type: string
 *                   students:
 *                     type: array
 *                     items:
 *                       type: string
 *                       format: ObjectId
 */

router.get('/subject', getAllSubjectsHandler);

/**
 * @openapi
 * /api/subject/{id}:
 *   get:
 *     summary: Obtiene una materia por ID
 *     description: Retorna los detalles de una materia específica.
 *     tags:
 *       - Subject
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 teacher:
 *                   type: string
 *                 students:
 *                   type: array
 *                   items:
 *                     type: string
 *                     format: ObjectId
 *       404:
 *         description: Materia no encontrada
 */

router.get('/subject/:id', getSubjectByIdHandler);

/**
 * @openapi
 * /api/subject/{id}:
 *   put:
 *     summary: Actualiza una materia por ID
 *     description: Modifica los detalles de una materia específica.
 *     tags:
 *       - Subject
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               teacher:
 *                 type: string
 *               students:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: ObjectId
 *     responses:
 *       200:
 *         description: Materia actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 teacher:
 *                   type: string
 *                 students:
 *                   type: array
 *                   items:
 *                     type: string
 *                     format: ObjectId
 * 
 *       404:
 *         description: Materia no encontrada
 */

router.put('/subject/:id', updateSubjectHandler);

/**
 * @openapi
 * /api/subject/{id}:
 *   delete:
 *     summary: Elimina una materia por ID
 *     description: Elimina una materia específica de la base de datos.
 *     tags:
 *       - Subject
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Materia eliminada exitosamente
 *       404:
 *         description: Materia no encontrada
 */
router.delete('/subject/:id', deleteSubjectHandler);

/**
 * @openapi
 * /api/subject/{id}:
 *   get:
 *     summary: Obtener estudiantes por ID de materia
 *     description: Obtener estudiantes por ID de materia.
 *     tags:
 *       - Subject
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
*     responses:
 *       200:
 *         description: Lista de estudiantes obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *       404:
 *         description: Materia no encontrada
 */
router.get('/subject/:id/students', getStudentsBySubjectIdHandler);

export default router;
