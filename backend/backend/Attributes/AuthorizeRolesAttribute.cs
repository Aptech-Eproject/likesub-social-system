using backend.Entities;
using Microsoft.AspNetCore.Authorization;

namespace backend.Attributes
{
    public class AuthorizeRolesAttribute : AuthorizeAttribute
    {
        public AuthorizeRolesAttribute(params RoleType[] roles)
        {
            Roles = string.Join(",", roles);
        }
    }
}
