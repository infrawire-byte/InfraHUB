INSERT INTO permissions (name) VALUES
  ('list'),
  ('detail'),
  ('create'),
  ('edit'),
  ('approve'),
  ('delete'),
  ('export')
ON DUPLICATE KEY UPDATE name = VALUES(name);

INSERT INTO roles (name, module, description) VALUES
  ('Admin.Owner', 'global', 'Full system access'),
  ('Fiscal.Manager', 'fiscal', 'Fiscal operations manager'),
  ('User.Financeiro', 'financeiro', 'Financeiro base access')
ON DUPLICATE KEY UPDATE description = VALUES(description);

INSERT INTO role_permissions (role_id, permission_id)
SELECT r.id, p.id
FROM roles r
JOIN permissions p
WHERE r.name = 'Admin.Owner';

INSERT INTO role_permissions (role_id, permission_id)
SELECT r.id, p.id
FROM roles r
JOIN permissions p
WHERE r.name = 'Fiscal.Manager' AND p.name IN ('list', 'detail', 'create', 'edit', 'approve', 'export');

INSERT INTO role_permissions (role_id, permission_id)
SELECT r.id, p.id
FROM roles r
JOIN permissions p
WHERE r.name = 'User.Financeiro' AND p.name IN ('list', 'detail', 'create');

INSERT INTO users (name, email, password_hash)
VALUES ('InfraHub Admin', 'admin@infrahub.local', '$2a$10$O8YF9bBlt3F4iAfDdc0AGeo7Nys8lm2Sleqrs9jw.Cyhl725LLJoC')
ON DUPLICATE KEY UPDATE name = VALUES(name);

INSERT INTO user_roles (user_id, role_id, scope)
SELECT u.id, r.id, 'global'
FROM users u
JOIN roles r ON r.name = 'Admin.Owner'
WHERE u.email = 'admin@infrahub.local'
ON DUPLICATE KEY UPDATE scope = 'global';

INSERT INTO modules (name, description) VALUES
  ('Financeiro', 'Gestão financeira integrada'),
  ('Fiscal', 'Obrigações fiscais e comunicação com SEFAZ'),
  ('Agenda', 'Agenda corporativa integrada'),
  ('Kanban', 'Quadros kanban nativos'),
  ('WhatsApp', 'Inbox omnichannel e chatbots')
ON DUPLICATE KEY UPDATE description = VALUES(description);
