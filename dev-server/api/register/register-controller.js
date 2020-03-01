import { StringUtil } from '../../utilities/string-util';

export function index(req, res) {
  const validation = validateIndex(req.body);
  if (!validation.isValid) {
    return res.json({ message: validation.message});
  }

  const user = {
    username: req.body.username.toLowerCase(),
    password: req.body.password
  }
}

function validateIndex(body) {
  let errors = '';
  if (StringUtil.isEmpty(bidy.username)) {
    errors += 'Username is required. ';
  }
  if (StringUtil.isEmpty(body.password)) {
    errors += 'Password is required. ';
  }

  return {
    isValid: StringUtil.isEmpty(errors),
    message: errors
  }
}
