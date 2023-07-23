import * as serviceIKEJA from "./serviceIKEJA"
import * as serviceEEDC from "./serviceEEDC"

//AUTH
export async function getToken(req, res, next) {
  try {
    return res.status(200).json(await serviceIKEJA.getCustomerDetailIKEJA(req.body));
  } catch (err) {
    next(err);
  }
}
export async function getUsage(req, res, next) {
  try {
    return res.status(200).json(await serviceIKEJA.getCustomerUsage(req.body));
  } catch (err) {
    next(err);
  }
}

export async function getDealerBalance(req, res, next) {
  try {
    return res.status(200).json(await serviceIKEJA.getDealerBalance(req.body));
  } catch (err) {
    next(err);
  }
}

export async function payElectricity(req, res, next) {
  try {
    return res.status(200).json(await serviceIKEJA.payElectricity(req.body));
  } catch (err) {
    next(err);
  }
}



//EEDC
export async function getCustomerDetailEEDC(req, res, next) {
  try {
    return res.status(200).json(await serviceEEDC.getCustomerDetailEEDC(req.body));
  } catch (err) {
    next(err);
  }
}

export async function getUsageDetailEEDC(req, res, next) {
  try {
    return res.status(200).json(await serviceEEDC.getUsageDetailEEDC(req.body));
  } catch (err) {
    next(err);
  }
}

export async function getDealerBalanceEEDC(req, res, next) {
  try {
    return res.status(200).json(await serviceEEDC.getDealerBalanceEEDC(req.body));
  } catch (err) {
    next(err);
  }
}

export async function payElectricityEEDC(req, res, next) {
  try {
    return res.status(200).json(await serviceEEDC.payElectricityEEDC(req.body));
  } catch (err) {
    next(err);
  }
}