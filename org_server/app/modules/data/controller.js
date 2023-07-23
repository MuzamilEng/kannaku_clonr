import * as service from "./service";

export async function getbalance(req, res, next) {
  try {
    return res.status(200).json(await service.getbalance(req.user));
  } catch (err) {
    next(err);
  }
}

export async function purchasedata(req, res, next) {
  try {
    return res.status(200).json(await service.purchasedata(req.user, req.body));
  } catch (err) {
    next(err);
  }
}

export async function getpackages(req, res, next) {
  try {
    return res.status(200).json(await service.getpackages());
  } catch (err) {
    next(err);
  }
}

export async function getbeneficiaries(req, res, next) {
  try {
    return res.status(200).json(await service.getbeneficiaries(req.user));
  } catch (err) {
    next(err);
  }
}

export async function addbeneficiary(req, res, next) {
  try {
    return res
      .status(200)
      .json(await service.addbeneficiary(req.user, req.body));
  } catch (err) {
    next(err);
  }
}

export async function transferdata(req, res, next) {
  try {
    return res.status(200).json(await service.transferdata(req.user, req.body));
  } catch (err) {
    next(err);
  }
}
