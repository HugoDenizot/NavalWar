using Microsoft.AspNetCore.Mvc;
using NavalWar.DTO;
using NavalWar.DTO.WebDTO;
using NavalWar.Business;
using NavalWar.DAL.Models;
using NavalWar.DAL;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace NavalWar.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameAreaController : ControllerBase
    {

        private readonly IGameService _gameService;

        public GameAreaController(IGameService gameService)
        {
            _gameService = gameService;
        }


        // POST api/<GameAreaController>
        [HttpGet("Get Player")]
        public PlayerDTO GetPlayer(int id)
        {
            return _gameService.GetPlayer(id);
            
        }

        [HttpGet("GetPersonnalBoard")]
        public IActionResult GetPersonalBoard(int id)
        {
            int[,] matrix=_gameService.getPersonalBoard(id);
            List<List<int>> listOfLists = new List<List<int>>();
            for (int i = 0; i < matrix.GetLength(0); i++)
            {
                List<int> row = new List<int>();
                for (int j = 0; j < matrix.GetLength(1); j++)
                {
                    row.Add(matrix[i, j]);
                }
                listOfLists.Add(row);
            }
            //Response.ContentType = "application/json";
            return Ok(listOfLists);
        }

        [HttpGet("GetShotBoard")]
        public List<List<int>> GetShotBoard(int id)
        {
            int[,] matrix = _gameService.getShotBoard(id);
            List<List<int>> listOfLists = new List<List<int>>();
            for (int i = 0; i < matrix.GetLength(0); i++)
            {
                List<int> row = new List<int>();
                for (int j = 0; j < matrix.GetLength(1); j++)
                {
                    row.Add(matrix[i, j]);
                }
                listOfLists.Add(row);
            }
            return listOfLists;
        }

   
        [HttpGet("CreateGame")]
        public IActionResult CreatePlayer()
        {
            string nomJoueur = "Joueur1";
            try
            {
                PlayerDTO playerResponseDto = _gameService.CreatePlayer(nomJoueur);

                return Ok(playerResponseDto);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        [HttpPost]
        [Route("api/sessions/players/{playerId}/placeship")]
        public IActionResult PlaceShip(int taille, int h, int posX, int posY, int playerId)
        {
            _gameService.PlaceShips(taille, h, posX, posY, playerId);/*SessionDTO game = _session.GetSession(gameId);
            var player = game.Players.FirstOrDefault(p => p._id == playerId);
            if (player == null)
            {
                return NotFound(); 
            }
            try
            {
                var result = _gameService.PlaceShips(gameId, shipPlacement);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }*/
            return Ok();
        }


        [HttpPost]
        [Route("api/players/{playerId}/shot")]
        public IActionResult Shot(int playerId, int PosX, int PosY)
        {
            TireDto t = new TireDto(PosX, PosY);
            return Ok(_gameService.ShotOn(t, playerId));
        }

        [HttpGet("RejoindrePartie/{id_partie}")]
        public IActionResult RejoindreGame(int id_partie)
        {
            string name = "Joueur2";
            return Ok(_gameService.rejoindrePartie(id_partie, name));
        }

        // PUT api/<GameAreaController>/5
        [HttpPut("update Player")]
        public void Put(int id, string value)
        {
            _gameService.UpdatePlayer(id,value);
        }

        // DELETE api/<GameAreaController>/5
        [HttpDelete("Delete player")]
        public void Delete(int id)
        {
            _gameService.DeletePlayer(id);
        }


    }
}

   