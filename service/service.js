const Get = async (_, res, model) => {
  const data = await model.find()
  res.json(data)
}

const Post = async (req, res, model) => {
  const { name, price, email, type, age } = req.body
  const data = await model.create({ name, price, email, type, age })
  res.json(data)
}

const Delete = async (req, res, model) => {
  const { id } = req.params;
  if (!id) throw new Error("Id is required");
  const deleted = await model.findByIdAndDelete(id);
  if (!deleted) throw new Error("This Id does not exist");
  res.json(deleted);
};

const Put = async (req, res, model) => {
  const { id } = req.params;
  if (!id) throw new Error("Id is required");
  const { name, price, email, type, age } = req.body
  const updated = await model.findByIdAndUpdate(
    id,
    { name, price, email, type, age },
    { new: true }
  );
  res.json(updated);
};

module.exports = { Get, Post, Delete, Put }