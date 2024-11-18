using FolderCreatorAPI.Model;
using Microsoft.AspNetCore.Mvc;
using System.IO;

namespace FolderCreatorAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoldersController : ControllerBase
    {
        [HttpPost]
        public IActionResult CreateFolder([FromBody] FolderRequest request)
        {
            string drivePath = "D:\\";

            if (!Directory.Exists(drivePath))
            {
                return BadRequest(new { message = "The D drive does not exist!" });
            }

            string folderPath = Path.Combine(drivePath, request.Name);

            if (Directory.Exists(folderPath))
            {
                return Conflict(new { message = "Duplicate name!" });
            }

            try
            {
                Directory.CreateDirectory(folderPath);
                return Ok(new { message = "Folder created successfully!" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred.", error = ex.Message });
            }
        }

    }


}
