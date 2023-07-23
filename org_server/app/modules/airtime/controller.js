import * as service from "./service";

//SERVICE PENDING
export async function getbalance(req, res, next) {
  try {
    return res.status(200).json(await service.getbalance(req.user,req.body));
  } catch (err) {
    next(err);
  }
}

export async function getStatus(req, res, next) {
  try {
    return res.status(200).json(await service.getStatus(req.body));
  } catch (err) {
    next(err);
  }
}

export async function getInformation(req, res, next) {
  try {
    return res.status(200).json(await service.getInformation(req.body));
  } catch (err) {
    next(err);
  }
}


export async function purchaseairtime(req, res, next) {
  try {
    return res
      .status(200)
      .json(await service.purchaseairtime(req.user, req.body));
  } catch (err) {
    next(err);
  }
}
