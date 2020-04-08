import File from '../models/File';

class FileControle {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const file = await File.create({
      name,
      path,
    });

    return res.json(file);
  }

  async index(req, res) {
    const file = await File.findAll();

    return res.json(file);
  }
}
export default new FileControle();
