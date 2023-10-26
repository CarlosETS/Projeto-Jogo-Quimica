import IUsers, { ILogin } from '../interfaces/IUsers';
import Users from '../data/users';
import bcrypt from "bcrypt";
import jwt, { TokenExpiredError } from "jsonwebtoken";


class UserService {
  static async create(body: IUsers) {
    try {
      const { email, password, name } = body;
			console.log({body})
			let token: string;

      if (!email || !password || !name) throw new Error("Dados de entrada inválidos");

			const userExist = await Users.findOne({email: email});
			if (!userExist){
				console.log("Não existe")
				const hashedPassword = await bcrypt.hash(password, 10);
				console.log("Hashei")
				const newUser = await Users.create({email: email, password: hashedPassword, name: name})	
				console.log("criei o user")
				if (newUser)
					token = jwt.sign({ name: newUser.name }, 'seuSegredo');
				else
					throw new Error('Aconteceu algum erro ao realizar o seu login')
				console.log("criei o token")
			}
				else {		
				throw new Error("Dados de entrada inválidos");
			}

      return { message: 'Usuario criado com sucesso', token: token };
    } catch (error: any) {
      return { error: error.message };
    }
  }

	static async login(body: ILogin){
		try {
			const { email, password } = body;

			const user = await Users.findOne({email: email})
			if (!user)
				throw new Error("Credenciais errado");

			const passwordMatch = await bcrypt.compare(password, user.password);

			if (!passwordMatch) 
				throw new Error("Credenciais errado");

			const token = jwt.sign({ email: user.email }, process.env.TOKEN_SECRET || 'asAASD489897AdfD789Fjh9UFJmfF857fhFojfJFifSPOSDD45OSsSSPFDS');
			return { message: 'Usuario logado com sucesso', token: token}
		} catch (error) {
			
		}
	}
}

export default UserService;