//> using dep com.lihaoyi::cask:0.10.2

enum Op:
  case Lower, Upper

object MinimalApplication extends cask.MainRoutes{
  @cask.get("/increment/:num")
  def getArticle(num: Int) = {
    num + 1
  }

  @cask.postJson("/change-case")
  def changeCase(operation: String, operand: String) = {
    operation match
      case "lower" => operand.toLowerCase()
      case "upper" => operand.toUpperCase()
      case _ => operand
  }

  initialize()
}
