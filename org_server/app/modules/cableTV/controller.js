import * as service from "./service";

export async function validateCableTv(req, res, next) {
  try {
    return res.status(200).json(await service.validateCableTv(req.user));
  } catch (err) {
    next(err);
  }
}

export async function getCableTvBoque(req, res, next) {
  try {
    return res.status(200).json(await service.getCableTvBoque(req.user, req.body));
  } catch (err) {
    next(err);
  }
}


export async function getCableTvBoqueAddon(req, res, next) {
  try {
    return res.status(200).json(await service.getCableTvBoqueAddon(req.user, req.body));
  } catch (err) {
    next(err);
  }
}
